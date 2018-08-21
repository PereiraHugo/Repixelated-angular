import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  context : CanvasRenderingContext2D;
  
  @ViewChild("myCanvas") mycanvas;
  
  @ViewChild("outputName") outputName;
  
  ngOnInit() {
    let canvas = this.mycanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.font = "15px Sans-serif";
    ctx.fillText("Download a picture",75,75);
  }  
  
  preview(e : any): void {
    let canvas = this.mycanvas.nativeElement;
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, 300, 300);
    
    // Show render picture to canvas
    var render = new FileReader();
    render.onload = function (event: any) {
      var img = new Image();
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
      };
      img.src = event.target.result;
    };
    render.readAsDataURL(e.target.files[0]);

    let file = e.target.files[0];
    this.outputName = file.name;
    
  }
}
