    let savelocal=(data)=>{
    localStorage.setItem("Artisan",data)
    }
    let deconnexion=()=>{
    localStorage.removeItem("Artisan")
    }
    let local=()=>{
    let locals= localStorage.getItem("Artisan")
    return !!locals
    }
    export const LocalService = { 
        savelocal,deconnexion,local
    } 