import { Blockquote, Button, Modal, Tooltip } from '@mantine/core'
import { Alert } from 'flowbite-react'
import { useState } from 'react'

import { Form } from '@/components'
import { Meta } from '@/layouts/Meta'
import { Main } from '@/templates/Main'

function Demo() {
    return (
        <Tooltip label="Tooltip">
            <Button variant="outline">Button with tooltip</Button>
        </Tooltip>
    )
}

function BlockQuote() {
    return (
        <Blockquote cite="– Forrest Gump">
            Life is like an npm install – you never know what you are going to
            get.
        </Blockquote>
    )
}

function ModalComponent() {
    const [opened, setOpened] = useState(false)
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
                withCloseButton={false}
            >
                Modal without header, press escape or click on overlay to close
            </Modal>
            <Button className="bg-black" onClick={() => setOpened(true)}>
                Open Modal
            </Button>
        </>
    )
}

const Index = () => {
    return (
        <Main
            meta={
                <Meta
                    title="Next.js Boilerplate Presentation"
                    description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
                />
            }
        >
            <h1 className="text-center font-bold">Next.js Starter</h1>
            <Alert color="info">Alert</Alert>
            <Demo />
            <BlockQuote />
            <ModalComponent />
            <Form />
        </Main>
    )
}

export default Index
