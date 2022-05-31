import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'columnTransform' })
export class columnTransform implements PipeTransform {

    list: string[] = ['goalsSelection', 'selectionsNation', 'rating', 'ratingPrice', 'select', 'id',
        'position', 'nation', 'price', 'age', 'team', 'league'];

    transform(column: string): string {
        switch (column) {

            case this.list[0]:
                return 'Goals Selection';
                break;
            case this.list[1]:
                return 'Selections Nation';
                break;
            case this.list[2]:
                return 'Rating';
                break;
            case this.list[3]:
                return 'Rating Price';
                break;
            case this.list[4]:
                return 'Select';
                break;
            case this.list[5]:
                return 'Id';
                break;
            case this.list[6]:
                return 'Position';
                break;
            case this.list[7]:
                return 'Nation';
                break;
            case this.list[8]:
                return 'Price';
                break;
            case this.list[9]:
                return 'Age';
                break;
            case this.list[10]:
                return 'Team';
                break;
            case this.list[11]:
                return 'League';
                break;
            default:
                return '';
                break;
        }


    }
}