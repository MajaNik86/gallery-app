import useFormattedDate from '../hooks/useFormattedDate';
import  Card  from "react-bootstrap/Card";
import  ListGroup  from 'react-bootstrap/ListGroup';

export default function GalleryRow({ gallery }) {

  const formattedDate = useFormattedDate(gallery.created_at, "dd-MM-yyyy HH:mm");

    return (
      <div>
        {gallery ? (
          <Card className=" my-4" style={{ width: '18rem',
            alignItems: "center",
            width: "80%",
            }}  >
          
            <div style={{ padding: "10px" }}>
              <img src={gallery?.images[0]?.url} width="100" alt="Gallery cover" />
            </div>
            <div style={{ padding: "10px", fontSize: 14, fontWeight: "bold" }}>
              <Card.Link href={`/galleries/${gallery?.id}`}>{gallery?.title}</Card.Link>
            </div>


            {formattedDate === "unknown" ? (
              <ListGroup className="list-group-flush">
              <ListGroup.Item>Unknown</ListGroup.Item>
              </ListGroup>
              ) : (
                <ListGroup className="list-group-flush">
                <ListGroup.Item style={{fontSize:9}}>Created at: {formattedDate} </ListGroup.Item>
                </ListGroup>
              )}
              
            <div style={{ padding: "10px", color: "#2c3e50", fontSize: 12 }}>
              By: <Card.Link href={`/authors/${gallery?.user.id}`}>{gallery?.user?.first_name} {gallery?.user?.last_name}</Card.Link>
            </div>

          </Card>

        ) : (
          <div>Nothing to show</div>

        )
        }
      </div>
    );
  }