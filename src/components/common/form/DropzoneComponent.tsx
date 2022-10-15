import { Text, useMantineTheme } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import type { FC } from 'react'
import { Photo, Upload, X } from 'tabler-icons-react'

// const getIconColor = (status: string, theme: any) => {
//     // @ts-ignore
//     return status.accepted
//         ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
//         : status.rejected
//         ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
//         : theme.colorScheme === 'dark'
//         ? theme.colors.dark[0]
//         : theme.colors.gray[7]
// }

// @ts-ignore
function ImageUploadIcon({ status, ...props }) {
    if (status.accepted) {
        return <Upload {...props} />
    }

    if (status.rejected) {
        return <X {...props} />
    }

    return <Photo {...props} />
}

export const dropzoneChildren = (status: any, theme: any, placeholder: any) => (
    <div className="flex flex-col items-center justify-center p-4">
        <div>
            <ImageUploadIcon
                status={status}
                style={{ color: 'white' }}
                size={80}
            />
        </div>
        <div>
            <Text size="xl">{placeholder}</Text>
        </div>
    </div>
)

type DropZoneProps = {
    label: string
    placeholder: string
    name: string
    onDrop: any
}

const DropzoneComponent: FC<DropZoneProps> = ({
    label,
    placeholder,
    name,
    onDrop,
}) => {
    const imageUploader = (imageName: string, files: any) => {
        if (files[0] === undefined) {
            alert('finished')
            return
        }
        if (files[0].type === 'image/jpeg' || files[0].type === 'image/png') {
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'chatapp')
            data.append('cloud_name', 'sourabhvaish')
            fetch('https://api.cloudinary.com/v1_1/sourabhvaish/image/upload', {
                method: 'post',
                body: data,
            })
                .then((res) => res.json())
                .then((response: any) => {
                    onDrop(imageName, response?.url)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }
    const theme = useMantineTheme()
    return (
        <div>
            <h5>{label}</h5>
            <Dropzone
                onDrop={(files: any) => imageUploader(name, files)}
                maxSize={10 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                multiple={false}
            >
                {/* @ts-ignore */}
                {(status: any) => dropzoneChildren(status, theme, placeholder)}
            </Dropzone>
        </div>
    )
}

export default DropzoneComponent
