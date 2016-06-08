import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {TreeComponent, TreeService} from '../ng2-tree';
import {NodeDraggableService} from '../src/node-draggable.service';

@Component({
  selector: 'app',
  template: `
        <tree [model]="tree"></tree>
        <tree [model]="tree2"></tree>
    `,
  directives: [TreeComponent]
})
class App {
  private tree: any = {
    value: 'A',
    children: [
      {
        value: 'B',
      },
      {
        value: 'C',
      },
      {
        value: 'D',
        children: [
          {
            value: 'X',
            children: [
              {
                value: 'X',
              },
              {
                value: 'Y',
              }
            ]
          },
          {
            value: 'Y',
            children: [
              {
                value: 'X',
              },
              {
                value: 'Y',
                children: [
                  {
                    value: 'X',
                  },
                  {
                    value: 'Y',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        value: 'W'
      }
    ]
  };

  private tree2: any = {
    value: 'Hello, World!',
    children: [
      {
        value: 'Javascript',
      },
      {
        value: 'Java',
      },
      {
        value: 'Web',
        children: [
          {
            value: 'HTML',
            children: [
              {
                value: 'html5',
              },
              {
                value: 'bootstrap',
              }
            ]
          },
          {
            value: 'css',
            children: [
              {
                value: 'tricks',
              },
              {
                value: 'codestyle',
                children: [
                  {
                    value: 'spaces',
                  },
                  {
                    value: 'naming conventions',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        value: 'W'
      }
    ]
  };

}

bootstrap(App, [TreeService, NodeDraggableService]);