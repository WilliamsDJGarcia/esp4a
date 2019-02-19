import{Chart} from 'chart.js';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
@Injectable()

export class EspService{

    public dato1;
    public dato2;
    public dato3;
    
    constructor(public afDB:AngularFireDatabase){

    }
   
    // myChart;
    public inicializar(){
        
        const dbRef = this.afDB.database.ref().child('Grafica/');
            dbRef.on('value', (snapshot) =>{
                this.dato1 = snapshot.val().dato1;
                this.dato2 = snapshot.val().dato2;
                this.dato3 = snapshot.val().dato3;

                alert(this.dato1);

                const myChart = new Chart('myChart', {
                    type: 'bar',
                    data: {
                        labels: ["Red", "Blue", "Yellow"],
                        datasets: [{
                            label: '# of Votes',
                            data: [this.dato1,this.dato2, this.dato3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });
            })
        }
    
    

    // public getDatos(){
    //     var datos:String[] = ["dato1","dato2", "dato3"];
       
    //     var valor;
    //     for(var a=0;a<3;a++){
    //         const dbRef = this.afDB.database.ref().child('/Grafica/'+datos[a]);
    //         dbRef.on('value', snap=>alert(valor=snap.val()));
            
    //     }
    // }

    
}

