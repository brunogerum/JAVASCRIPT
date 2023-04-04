// import { Login } from "./Login.js";
import { Cxmsg } from "../Caixa de mensagem personalizada/cxmsg2.js";

const callback_ok=()=>{

}

const callback_naook=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
    }
    Cxmsg.mostrar(config,"ERRO","Usuario ou senha incorretos")
}

Login.login(callback_ok,callback_naook);