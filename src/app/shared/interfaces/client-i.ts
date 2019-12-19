import { StateClient } from '../enums/state-client.enum';
import { TableauDarkComponent } from '../components/tableau-dark/tableau-dark.component';
import { StateDirective } from '../directives/state.directive';

export interface ClientI {
  id: number;
  name: string;
  email: string;
  image: string;
  state: StateClient;
}
