    let savelocal=(data)=>{
    localStorage.setItem("Admin",data)
    }
    let deconnexion=()=>{
    localStorage.removeItem("Admin")
    }
    let local=()=>{
    let locals= localStorage.getItem("Admin")
    return !!locals
    }
    export const LocalService = { 
        savelocal,deconnexion,local
    } 