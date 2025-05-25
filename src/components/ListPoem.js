import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect,useState } from 'react';

import Button from 'react-bootstrap/Button';

import React from 'react';

const ruta = "https://ramirotelles.github.io/poetry-cyan01";

function ListPoem() {
    const [jsonData, setJsonData] = useState(null);
    const [idPoem,setIdPoem] = useState(null);

    const clickHandler = (id) =>{
        setIdPoem(id);
    };

  useEffect(() => {
    fetch(ruta +'/poems/data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        return res.json();
      })
      .then((data) => {
        setJsonData(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.error('Error al cargar JSON:', err);
      });
  }, []);

  return (
    <>
        <Container className='mt-4 mb-4'>
        <ListGroup>
            {jsonData && !idPoem && (jsonData.map(poem => {
                //const {id,title, paragraph} = poem;
                
                return(
                    <>
                        <ListGroup.Item id={poem.id} style={{ fontFamily: 'Playpen Sans Arabic' }}><Button variant="link" style={{ color: 'black' }} onClick={() => clickHandler(poem.id)}>{poem.title}</Button></ListGroup.Item>
                    </>
                );
            }))
            
            }

        </ListGroup> 
        {idPoem && jsonData && (<h3 className='text-start text-capitalize mb-4'> {jsonData[idPoem-1].title}</h3>)}
        {idPoem && jsonData && (jsonData[idPoem-1].paragraph.map(paragraph =>{

            return(
                <>
                    <p className='text-break' style={{ fontFamily: 'Playpen Sans Arabic' }}>{paragraph}</p>
                </>
            );
        })                                              
        )}
        {idPoem && jsonData && (<Button variant='outline-dark' onClick={() => setIdPoem(null)}                                                                                                                                                                                                                                                 >Volver</Button>)}
        </Container>
    </>
  );
}

export default ListPoem;