import { supabase } from "../supabase/supabase"
export async function buscarImagem() {
    const { data: { user }, error } = await supabase.auth.getUser()
    if(!user || error){
        alert("usuário não logado!!")
        return
    }
    const avatar = user.user_metadata?.avatar_url || null
    return avatar 
}