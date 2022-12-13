import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGallery } from "../store/galleries/selector";
import { createGallery, editGallery } from "../store/galleries/slice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
 import  Card  from "react-bootstrap/Card";


export default function CreateGallery() {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const retrievedGallery = useSelector(selectGallery);

    const [newGallery, setNewGallery] = useState({
        title: "",
        description: "",
        images: []
    });

    const [newImages, setNewImages] = useState([{
        url: ""
    }]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            if (!retrievedGallery) {
                alert("You can edit only your own gallery");
                history.push("/galleries");
                return;
            }
            dispatch(editGallery({newGallery:{ galleryId: id, title: newGallery.title, description: newGallery.description, images: newGallery.images}}))
          history.push('/galleries')
        } else {
            dispatch(createGallery(newGallery))
            history.push('/galleries')
        }
    }

    const handleCancel = (e) =>{
        e.preventDefault();
        history.push("/galleries");
        
    }

    const handleInputChange = (e, index) => {
        const list = [...newImages];
        list[index][e.target.name] = e.target.value;
        setNewImages(list);
        setNewGallery({...newGallery, images: newImages})
    }

    const handleAddClick = () => {
        setNewImages([...newImages, { url: "" }]);
    }

    useEffect(() => {
        setNewGallery({
            ...newGallery,
            images: newImages
        })
    }, 
    [])
    
    useEffect(() => {
        if(id){
            setNewGallery(retrievedGallery);
            setNewImages(retrievedGallery?.images);
            if (!retrievedGallery) {
                alert("You can edit only your own gallery");
                history.push("/galleries");
                return;
            }
        }
    }, 
    [id, history, retrievedGallery])

    const handleRemoveClick = index => {
        const list = [...newImages];
        list.splice(index, 1);
        setNewImages(list);
    }

    const reorderArray = (event, originalArray) => {
        const movedItem = originalArray.find((i, index) => index === event.oldIndex);
        const remainingItems = originalArray.filter((i, index) => index !== event.oldIndex);
      
        const reorderedItems = [
            ...remainingItems.slice(0, event.newIndex),
            movedItem,
            ...remainingItems.slice(event.newIndex)
        ];
      
        return reorderedItems;
    }
      
    function changeOrder(index, direction) {
        var updatedImages = [...newImages];
        setNewImages(reorderArray({oldIndex: index, newIndex: index + (direction === "UP" ? (-1) : 1)}, updatedImages));
    }

    return (
        <div>
            <Card className="px-4 my-4" style={{ 
            alignItems: "center",
            width: "100%"}}>
            <Form onSubmit={handleSubmit} className="px-4 my-5">

            <Card.Header as="h5">{id ? "Edit Gallery" : "Create Gallery"}</Card.Header>  
                <Form.Control  className="px-4 my-5" 
                    required type="text" id="title" placeholder="Title" value={newGallery?.title} 
                    onChange={({ target }) =>
                    setNewGallery({ ...newGallery, title: target.value })}/>
               <Form.Control className="px-4 my-5" as="textarea" 
                    cols="50" rows="4" type="text" id="description" placeholder="Description" value={newGallery?.description} 
                    onChange={({ target }) =>
                    setNewGallery({ ...newGallery, description: target.value })}/>
                
                {newImages && newImages.map((x, i) => {
                    return (<div key={i} >
                            <Form.Control className="px-4 my-2" required key={i} name="url" value={x.url} placeholder="Image url" onChange={e => handleInputChange(e, i)} />

                                {newImages?.length - 1 === i  && <Button className="px-10 my-2"  variant="outline-secondary" size="sm"onClick={handleAddClick}>Add picture</Button>}
                                {newImages?.length !== 1 && <Button variant="outline-secondary" size="sm" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                          
                                {newImages?.length !== 1 && <Button variant="outline-secondary" size="sm" type="button" onClick={() => changeOrder(i, "UP")}>Move Up</Button>}
                            
                                {newImages?.length !== 1 && <Button type="button" variant="outline-secondary" size="sm" onClick={() => changeOrder(i, "DOWN")}>Move Down</Button>}
                        </div>
                    )
                })}

                    <Button  variant="outline-secondary"  type="submit">{id ? "Edit" : "Submit"}</Button>

                    <Button  variant="outline-secondary"  onClick={handleCancel}>Cancel</Button>     
              
                </Form>
                </Card>

        </div>
    );
    
}

