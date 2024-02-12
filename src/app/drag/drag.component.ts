import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';
import 'leader-line';
import 'anim-event'
import {DOCUMENT} from "@angular/common";
declare let LeaderLine: any;
@Component({
  selector: 'app-drag',
  standalone: true,
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './drag.component.html',
  styleUrl: './drag.component.css'
})
export class DragComponent implements OnInit{
document = inject(DOCUMENT) ;

  private leaderLineInstance: any;
  ngOnInit() {
    this.leaderLineInstance = new LeaderLine(
      this.document.getElementById('d1'),
      this.document.getElementById('d2'),
    {
      endPlug: 'behind',
      startLabel: LeaderLine.captionLabel('START', {color: 'blue'}),
      startSocket: 'auto',
      endSocket: 'auto'

    }
    );
  }

  onDragMoved(){
    if (this.leaderLineInstance) {
      this.leaderLineInstance.position();
    }

  }


}
