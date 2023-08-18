import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Scrum 9</IonTitle>
            <IonButtons slot="end">
            <Link to="/Home">
              <IonButton>
                Home
              </IonButton>
            </Link>
            <Link to="/About">
              <IonButton>
                About
              </IonButton>
            </Link>
            <Link to="/Products">
              <IonButton>
                Products
              </IonButton>
            </Link>
          </IonButtons>
  
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
        <div>
            <div className='image-container ion-text-center'>
                <img className="rounded-image" src='src/images/Pic.jpg' />
            </div>
            <h1 className='label ion-text-center'>Devinn Weller</h1>
            <h2 className='label ion-text-center'>The Algorithm Alchemists</h2>
            <p>
            My name is Devinn Weller. I am a final year Computer Science student, enrolled at the University of the West Indies.
            I am also minoring in the field of Psychology. I enjoy watching anime, watching and playing football. I am also very passionate about history. I enjoy watching historical documentaries and learning about random historical facts.
            I try earnestly to be a true team player whenever I am placed in a group. I appreciate the poolinf of ideas among a group. I believe that through proper collaboration, the load of any assignment wil be lessened.  
            I am truly grateful for this opportunity that I was given to be a part of the NCB internship. It has been a wonderful experience.
           </p>
        </div>
      
        </IonContent>
      </IonPage>
    );
  };
  
  export default About;