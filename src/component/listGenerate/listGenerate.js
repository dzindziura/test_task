import { useEffect, useState } from 'react';
import { ListItem } from '../listItem/listItem';
export const ListGenerate = () => {
    const [data, setData] = useState([]);

      useEffect( () => {
        const url = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              setData(json)
            } catch (error) {
              console.log("error", error);
            }
          };
      
          fetchData();
      }, [])
    const renderItems = data.map(item => {
        return <ListItem key={item.id}
                data={item}/>
    });
    return (
        <div className='container flex flex-col mx-auto gap-2.5'>
            {renderItems}
        </div>
    )

}