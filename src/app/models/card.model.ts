import { Patient } from './patient.model';
import { Refferal } from './refferal.model';
import { Prescription } from './prescription.model';
import { Therapy } from './therapy.model';
import { Allergenic } from './allergenic.model';

export class Card {
  cardId: number;
  patient: Patient;
  allergenics: Allergenic[];
  refferals: Refferal[];
  prescriptions: Prescription[];
  therapies: Therapy[];
}