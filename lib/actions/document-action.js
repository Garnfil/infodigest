"use server";

import { createClient } from "../supabase/client";

export const getDocument = async (id, user) => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("documents")
        .select()
        .eq("id", id)
        .eq("user_id", user?.id)
        .limit(1);

    if (error) {
        console.log(error);
    }

    return data[0];
};

export const getUserDocuments = async (user, limit = null) => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("documents")
        .select()
        .eq("user_id", user?.id)
        .limit(limit);

    if (error) {
        console.log(error);
    }

    return data;
};

export const deleteDocument = async (document, user) => {
    const supabase = createClient();
    const response = await supabase
        .from("documents")
        .delete()
        .eq("id", document?.id)
        .eq("user_id", user?.id);

    return response;
};
