import { ActionIcon, Group, Text, TextInput } from '@mantine/core'
import type { FC } from 'react'
import React from 'react'
import { Trash } from 'tabler-icons-react'

type FAQRepeaterProps = {
    form: any
    label: string
    question: string
    answere: string
    action: any
    name?: string
}

const FAQRepeaterComponent: FC<FAQRepeaterProps> = ({
    form,
    label,
    question,
    answere,
    action,
    name,
}) => {
    console.log({ name })
    const FAQs = form.values.projectFAQs.map((_: null, index: number) => (
        <div
            key={`faq-items-${index}`}
            className="mb-6 flex flex-col space-y-2"
        >
            <div className="relative flex">
                <TextInput
                    placeholder={question}
                    required
                    sx={{ flex: 1 }}
                    // {...form.getListInputProps(
                    //     'projectFAQs',
                    //     index,
                    //     'question'
                    // )}
                />

                <div className="absolute right-1 top-1">
                    <ActionIcon
                        color="red"
                        onClick={() =>
                            form.removeListItem(
                                'projectFAQs',
                                index,
                                'question'
                            )
                        }
                    >
                        <Trash size={16} />
                    </ActionIcon>
                </div>
            </div>
            <TextInput
                placeholder={answere}
                required
                sx={{ flex: 1 }}
                // {...form.getListInputProps('projectFAQs', index, 'answer')}
            />
        </div>
    ))
    return (
        <div>
            {FAQs.length > 0 ? (
                <Group mb="xs" mt="md">
                    <Text weight={500} size="sm" sx={{ flex: 1 }}>
                        {label}
                    </Text>
                </Group>
            ) : (
                <Text color="dimmed" mt="md" align="center">
                    Please add FAQs for the Raffle
                </Text>
            )}

            {FAQs}

            <Group mt="md">
                <button
                    type="button"
                    className="rounded-md bg-[#34354a] py-2 px-4 text-white shadow-md"
                    onClick={() =>
                        form.addListItem('projectFAQs', {
                            question: '',
                            answer: '',
                        })
                    }
                >
                    {action}
                </button>
            </Group>
        </div>
    )
}

export default FAQRepeaterComponent
