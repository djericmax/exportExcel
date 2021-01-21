import { Component, OnInit } from '@angular/core';
import * as alasql from 'alasql';
import * as XLSX from 'xlsx';
alasql['utils'].isBrowserify = false;
alasql['utils'].global.XLSX = XLSX;

@Component({
  selector: 'app-alasql',
  templateUrl: './alasql.component.html',
  styleUrls: ['./alasql.component.css']
})


export class AlasqlComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  exportar(){

    var especies = [
      {type: "Cachorro", name: "Spot"},
      {type: "Leão", name: "Scar"},
      {type: "Gato", name: "Felix"},
      {type: "Tigre", name: "Tony"},
      {type: "Porco", name: "Gaguinho"},
      {type: "Pássaro", name: "Red"},
      {type: "Homem", name: "MadMax"}
    ];

    var cargos = [
        {id: 1, nome: "Spot", idade: 23, cfp: '541.541.541-58', cargo: 'Presidente', setor: 'Marketing', veículo: 'Televisão'},
        {id: 2, nome: "Tony", idade: 42, cfp: '123.123.123-12', cargo: 'Governador', setor: 'Produção', veículo: 'Fábrica'},
        {id: 3, nome: "Felix", idade: 50, cfp: '751.157.751-85', cargo: 'Senador', setor: 'Planejamento', veículo: 'Sobre Loja'}
    ];

    var planejamento = [
      {
      id: 1,
      aba: 'Linhas de Negócio',
      nome: 'Privite Equity',
      Status:  'Ativo',
      descricao: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por lorem ipsum mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).'
      },
      {
        id: 2,
        aba: 'Linhas de Negócio',
        nome: 'Seguros',
        Status:  'Ativo',
        descricao: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por lorem ipsum mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).'
      }
    ];

    var opts = [
      {sheetid : "Espécies", header: true },
      {sheetid : "Cargos", header: true },
      {sheetid : "Planejamento", header: true },
      {sheetid : "AbaSemConteúdo", header: true },
    ];

    alasql(`SELECT INTO XLSX("ALASQL_JSON_to_Excel.xlsx",?) FROM ?`, [opts, [especies, cargos, planejamento]]);

  }

}

