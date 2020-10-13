import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem(){
  return( 
    <article className="teacher-item">
       <header>
         
         <img src="https://avatars1.githubusercontent.com/u/22417542?s=4u=ccfea0d37d04fc057d039c9423db158e0caac10c&v=4" alt="Anderson"/>
         <div>
         <strong>Anderson Pereira</strong>
         <span>Química</span>
         </div>
      </header>
            <p>
         Entusiasta
        <br/><br/>
         Apaixonado
            </p>
      <footer>
         <p>
                Preço/hora
          <strong>R$80,00</strong>
        </p>
         <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
           Entrar em contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;