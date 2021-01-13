import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MattabItem {
  id: number;
  nome: string;
  idade: string;
  telefone: string;
  UF: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MattabItem[] = [
  {id: 1, nome: 'Jax', idade: '38' , telefone: '2525-5252', UF: 'SP'},
  {id: 2, nome: 'Sônia Blade', idade: '26', telefone: '4545-5252', UF: 'RJ'},
  {id: 3, nome: 'Liu Kang', idade: '28', telefone: '4141-4141', UF: 'PB'},
  {id: 4, nome: 'Kung Lao', idade: '127', telefone: '4242-4242', UF: 'SP'},
  {id: 5, nome: 'Shang Tsung', idade: '279', telefone: '7474-7474', UF: 'MG'},
  {id: 6, nome: 'Johny Cage', idade: '32', telefone: '7878-7875', UF: 'PB'},
  {id: 7, nome: 'Kano', idade: '47', telefone: '7172-7271', UF: 'RN'},
  {id: 8, nome: 'Scorpion', idade: '178', telefone: '7363-3636', UF: 'SP'},
  {id: 9, nome: 'Sub Zero', idade: '70', telefone: '6336-6336', UF: 'RJ'},
  {id: 10, nome: 'Kitana', idade: '187', telefone: '5225-2552', UF: 'RJ'},
  {id: 11, nome: 'Cindel', idade: '230', telefone: '3553-3553', UF: 'MG'},
  {id: 12, nome: 'Jade', idade: '109', telefone: '2442-4224', UF: 'SP'},
  {id: 13, nome: 'Repitile', idade: '102', telefone: '2474-2555', UF: 'RN'},
  {id: 14, nome: 'Smoke', idade: '48', telefone: '2436-6324', UF: 'PB'},
  {id: 15, nome: 'Cyrax', idade: '12', telefone: '2463-1441', UF: 'MG'},
  {id: 16, nome: 'Montaro', idade: '120', telefone: '4141-1414', UF: 'RJ'},
  {id: 17, nome: 'Sheeva', idade: '36', telefone: '4224-4224', UF: 'SP'},
  {id: 18, nome: 'Goro', idade: '65', telefone: '2436-6324', UF: 'RN'},
  {id: 19, nome: 'Kintaro', idade: '52', telefone: '2496-9636', UF: 'RJ'},
  {id: 20, nome: 'Shao Kan', idade: '300', telefone: '2436-3656', UF: 'PB'},
];

/**
 * Data source for the Mattab view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MattabDataSource extends DataSource<MattabItem> {
  data: MattabItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MattabItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MattabItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MattabItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Nome columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
