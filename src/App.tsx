import './App.css'
import type {CoffeeType} from "@/types/coffeeType.ts";
import {ToastContainer, toast} from 'react-toastify';
import {useCoffeeStore} from "@/model/cooffeeStore.ts";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import {Card, Button, Rate, Tag} from "antd";
import '@ant-design/v5-patch-for-react-19';


function App() {
    const {coffeeItems, getCoffeeItems} = useCoffeeStore()
    const { Meta } = Card;

    useEffect(() => {
        getCoffeeItems()

    }, [])


    console.log(coffeeItems);

    return <div className="max-w-[1500px] m-auto flex flex-wrap items-center flex-row wrap justify-center gap-[16px]">
            <ToastContainer
                autoClose={500}

            />
        {coffeeItems.map((item, index) => (
            <Card
                key={index}
                hoverable
                style={{width: 240}}
                cover={<img alt={item.name} src={item.image}/>}
                actions={[
                    <Button
                        onClick={()=>{
                            console.log('asdadssa')
                            toast.info('Пока не работает')
                        }}
                        icon={<ShoppingCartOutlined/>} >{item.price}
                    </Button>
                ]}
                >
                    <Meta title={item.name} description={item.subtitle} />

                    <Rate defaultValue={item.rating} disabled allowHalf />

                    <Tag
                    color={'purple'}
                    >

                        {item.type}
                    </Tag>
            </Card>

        ))}



            </div>


        }

        export default App
