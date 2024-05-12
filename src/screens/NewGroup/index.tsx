import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { HightLight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { Container, Content, Icon } from "./styles";

type Props = {

}

export function NewGroup() {
    return (

        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <HightLight
                    title="Nova turma"
                    subtitle="crire a turma para adicionar as pessoas"
                />

                <Input
                placeholder="Nome da turma"
                
                
                />

                <Button
                    style={{ marginTop: 24 }}
                    title="Criar"
                />
            </Content>
        </Container>
    )
}