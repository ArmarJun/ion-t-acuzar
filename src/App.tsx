import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, calculatorOutline, ellipse, fingerPrintOutline, personCircleOutline, square, triangle, closeOutline } from 'ionicons/icons';
import Home from './pages/home';
import Profile from './pages/Profile';
import Click_counter from './pages/Click_counter';
import Calculator from './pages/Calculator';
import To_do_list from './pages/todolist/Todolist';
import Qoutes_Generator from './pages/qoutesgenerator/qoutesgenerator';
import Notes from './pages/notes/notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ion-t-acuzar/">
            <Redirect to="/ion-t-acuzar/home" />
          </Route>
          <Route exact path="/ion-t-acuzar/home">
            <Home />
          </Route>

          <Route path="/ion-t-acuzar/calculator">
            <Calculator />
          </Route>

          <Route exact path="/ion-t-acuzar/click_counter">
            <Click_counter />
          </Route>

          <Route exact path="/ion-t-acuzar/to_do_list">
            < To_do_list />
          </Route>

          <Route exact path="/ion-t-acuzar/qoutes_generator">
            < Qoutes_Generator />
          </Route>

          <Route path="/ion-t-acuzar/notes">
            <Notes />
          </Route>

          <Route exact path="/ion-t-acuzar/profile">
            <Profile />
          </Route>

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/ion-t-acuzar/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

       <IonTabButton tab="profile" href="/ion-t-acuzar/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;