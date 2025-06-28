"use server";

import {createClient} from "../supabase/server";

export const getDocument = async (id) => {
    const supabase = await createClient();
    const {
        data: {user},
    } = await supabase.auth.getUser();

    const {data, error} = await supabase
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

export const getUserDocuments = async (limit = null) => {
    const supabase = await createClient();
    const {
        data: {user},
    } = await supabase.auth.getUser();

    const {data, error} = await supabase
        .from("documents")
        .select("*")
        .eq("user_id", user?.id)
        .limit(limit ?? 100);

    if (error) {
        console.error("Error fetching documents:", error);
    }

    return data;
};

export const deleteDocument = async (document) => {
    const supabase = await createClient();

    const {
        data: {user},
    } = await supabase.auth.getUser();

    // Delete from storage if file_path exists
    if (document.file_path) {
        const {storageError} = await supabase.storage
            .from("documents") // Replace with your bucket name
            .remove(document.file_path);

        if (storageError) {
            console.error("Storage delete error:", storageError);
        }
    }

    const {data, error} = await supabase
        .from("documents")
        .delete()
        .eq("id", document?.id)
        .eq("user_id", user?.id);

    if (error) {
        console.log("Error deleting documents: ", error);
        return null;
    }

    return data;
};
