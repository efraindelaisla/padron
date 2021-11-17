import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CanastaService } from '../service/canasta.service';	//<---
import { Canasto } from '../interfaces/canasto';					//<---
import { Router } from '@angular/router';
import { FiltrosService } from '../../../services/filtros.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
  providers:[CanastaService],
})
export class MostrarComponent implements OnInit {

      canasta!: Canasto[];
    item!: Canasto;
    ban: boolean = false;
    public page: number = 0;
    public search: string = '';
    lstMunicipio: string[] = [];
    municipio: string = "";

    @ViewChild(MatPaginator, {static: false}) paginator?: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort?: MatSort;

  myFilterValue = '';
  selectedRowIndex!: number;

    displayedColumns: string[] = ['PROGRESIVO', 'PROGRAMA', 'VERTIENTE', 'PRIMER_APELLIDO', 'SEGUNDO_APELLIDO','NOMBRE','CALLE','NUM_EXT','NUM_INT',
    'LOCALIDAD','MUNICIPIO','CURP','EDAD','SEXO','FOLIO_RELACIONADO', 'CANT_APOYOS_RECIBIDOS', 'COSTO_UNITARIO','PRIMERA_ENTREGA','FT_01','SEGUNDA_ENTREGA', 'FT_02',
    'TERCERA_ENTREGA','FT_03','CUARTA_ENTREGA', 'FT_04']
    
    dataSource : any;
    
  constructor(
    private canastaService: CanastaService,
    private filtrosService: FiltrosService,
    private route: Router) {
    // this.mostrarCanasta();

  }
  // filter = '';
  // filterm = '';

  ngOnInit(){

    this.mostrarMunicipio();
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      // this.dataSource.filter = filterValue ? filterValue.trim().toLowerCase() : '';

      this.dataSource.filter = filterValue;
      
      // return filterValue;
    }

    resetFilter(event: Event) {
      this.myFilterValue = '';
      this.dataSource.filter = '';
    }
  
    selectRow(row: any) {
      console.log("Selected: ", row);
    }


   onMunicipioChange(){
     console.log(this.municipio);
     this.mostrarCanasta();
   };



   mostrarMunicipio() {
    this.filtrosService.get().subscribe(
        data => {
          this.lstMunicipio = data;
        },
        error => {
          console.log(error);
          alert('Error: Mostrar!!!');
        });
  }



		mostrarCanasta() {
				this.canastaService.get(this.municipio).subscribe(
	  				data => {
	  					this.canasta = data;
              this,this.dataSource = new MatTableDataSource<Canasto>(this.canasta)
              this.dataSource.paginator = this.paginator
              this.myFilterValue = '';
              this.dataSource.filter = this.myFilterValue ? this.myFilterValue.trim().toLowerCase() : '';  
               


            //   ngOnInit() {
            //     this.dataSource.filterPredicate =
            //      (data: Element, filter: string) => {
            //       return data.name == filter;
            //      };
            //    }
            //  applyFilter(filterValue: string) {
            //     // filterValue = filterValue.trim(); // Remove whitespace
            //     // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
            //     this.dataSource.filter = filterValue;
            //   }

              
	  					console.log(data);
	  				},
	  				error => {
	  					console.log(error);
	  					alert('Error: Mostrar!!!');
	  				});

           
            
			}
    
      


    // ejemplo(){
    //  this.canastaService.getAll().subscribe(data =>{
    //    console.log(data);
    //  });
    // }

    ir(codigo: any){
      this.ban = !this.ban;
      this.item = codigo;
      console.log(this.item);
      this.route.navigate(['/editarBeneficiario', codigo]);
    }


    nextPage() {

      this.page += 5;
    }

    prevPage() {
      if ( this.page > 0 )
        this.page -= 5;
    }

    onSearchCanasta( search: string ) {
      this.page = 0;
      this.search = search;
    }



}
