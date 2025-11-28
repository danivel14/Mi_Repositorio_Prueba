import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Alert } from "react-native";

type User = {
    id: string;
    email?: string;
    token: string;
}| null;

type AuthContextType = {
    user: User | null;
    isAllowed: boolean;
    login: (email:string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
    return context;
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    useEffect(()=>{
        const restoreSession = async () =>{
            const {data, error} = await supabase.auth.getSession();
            
        }

    },[])


    const login = async (email: string, password: string) => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email, 
            password
        });
        if (error){
            Alert.alert("Error al iniciar sesion", error.message)
        };
        if(data.session && data.user) {
            setUser({
                id: data.user.id,
                email: data.user.email,
                token: data.session.access_token,
            })
        }
    }

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, isAllowed, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}