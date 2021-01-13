import { get } from 'lodash-es';
import naturalCompare from 'natural-compare';
import { SortEvent } from 'primeng/api';

// Natural sort (number and letters mixed) with support for nested fields
export function naturalSort(event: SortEvent): void {
  event.data.sort((data1, data2) => {
    let result: number;
    const value1 = get(data1, event.field);
    const value2 = get(data2, event.field);
    if (value1 == null && value2 != null) {
      result = -1;
    }
    else if (value1 != null && value2 == null) {
      result = 1;
    }
    else if (value1 == null && value2 == null) {
      result = 0;
    }
    else if (typeof value1 === 'string' && typeof value2 === 'string') {
      result = naturalCompare(value1, value2);
    }
    else {
      result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
    }
    return event.order * result;
  });
}
