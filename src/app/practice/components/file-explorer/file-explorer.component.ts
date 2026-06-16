import { Component } from '@angular/core';

type TreeNode = { name: string; children?: TreeNode[]; open?: boolean };

@Component({
  selector: 'app-practice-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent {
  tree: TreeNode[] = [
    {
      name: 'src',
      open: true,
      children: [
        { name: 'App.ts' },
        { name: 'components', children: [{ name: 'Button.ts' }, { name: 'Modal.ts' }] }
      ]
    }
  ];

  toggleNode(node: TreeNode): void {
    node.open = !node.open;
  }
}
