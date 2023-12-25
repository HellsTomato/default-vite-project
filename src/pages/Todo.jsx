
// Импорт React и хука useState из библиотеки React.
import React, { useState } from 'react'

// Импорт необходимых компонентов из библиотеки Chakra UI.
import {
    chakra,
    Button,
    List,
    ListItem,
    Heading,
    Flex,
    Input,
    Text,
} 
// библиотека из проекта
from '@chakra-ui/react'



export const Home = () => {

    // Создание состояния todos для хранения 
    // списка задач и функции setTodos для его обновления.
    const [todos, setTodos] = useState([])

    // Создание состояния text для хранения текста
    // новой задачи и функции setText для его обновления.
    const [text, setText] = useState('')



    // функция для добавления задач
    const createTodoHandler = (text) => {
        setTodos((prevState) => [...prevState, { id: Date.now(), text }])
        setText('')
        // a = [1,2,3] => b = [...[1,2,3], 4,5,6] = [1,2,3,4,5,6]
    }

    // функция для удаления задач
    const removeTodoHandler = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }
    
    // Возвращаемая часть компонента Home
    return (

        // Контейнер для выравнивания и размещения элементов.
        <Flex
            flexDirection="column"
            h="100vh"
            w="100vw"
            m="1rem"
            gap="1rem"
            alignItems="center"
            // backgroundColor="rgb(30,30,30)"

            
        >
             {/* Заголовок страницы, отображающий "Todo List". */}
            <Heading textTransform="uppercase">Todo List</Heading> 
           
            {/* Список задач с настройками стилей. */}
            <List 
                h="60vh"
                w="70vw"
                display="flex"
                flexDirection="column"
                overflowY="scroll"
                border="2px solid black"
                borderRadius="md"
                p="10px"
                

            >
                {/* Маппинг массива задач (todos) для 
                отображения каждой задачи в виде компонента ListItem */}
                {todos
                .map((todo) => (

                    // Каждая задача в списке, содержащая
                    // текст и кнопку "Удалить".
                    <ListItem
                        key={todo.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom="1px solid gray"
                        py="8px"
                        
                    >
                        <Text>{todo.text}</Text>
                        <Button
                            onClick={() => removeTodoHandler(todo.id)}
                            background="red.500"
                            color="white"
                            _hover={{
                                background: 'red.600',
                            }}
                        >
                            Удалить
                        </Button>
                    </ListItem>
                ))}
            </List>

            {/* Форма для ввода новой задачи. */}
            <chakra.form

                // Обработчик отправки формы, который вызывает 
                // функцию createTodoHandler для добавления новой задачи.
                onSubmit={(e) => {
                    e.preventDefault() // Без перезагрузки приложения после добавления задачи
                    createTodoHandler(text)
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="20px"
            >
                {/* Поле ввода для ввода текста новой задачи. */}
                <Input
                    placeholder="Напишите задачу..."
                    maxLength={80}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    w="300px"
                    h="32px"
                />
                {/* Кнопка для отправки новой задачи,
                 с условием активности и стилями. */}
                <Button
                    isDisabled={!text.trim().length}
                    type="submit"
                    w="fit-content"
                    background="blue.500"
                    color="white"
                    _hover={{
                        background: 'blue.600',
                    }}
                >
                    Добавить задачу
                </Button>
            </chakra.form>
        </Flex>
    )
}