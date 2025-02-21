import Button from "@/components/button";
import {ArrowRight, Copy, Mail} from "lucide-react";
import IconButton from "@/components/icon-button";
import {InputField, InputIcon, InputRoot} from "@/components/input";

export default function Home() {
  return (
    <main>
        <Button type="submit">Enviar<ArrowRight/></Button>
        <IconButton><Copy/></IconButton>
        
        <div>
            <InputRoot>
                <InputIcon>
                    <Mail/>
                </InputIcon>
                <InputField placeholder="Digite seu e-mail"/>
            </InputRoot>
            
            <InputRoot error>
                <InputIcon>
                    <Mail/>
                </InputIcon>
                <InputField placeholder="Digite seu e-mail"/>
            </InputRoot>
        </div>
    </main>
  );
}
