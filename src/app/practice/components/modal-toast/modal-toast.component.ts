import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-practice-modal-toast',
  templateUrl: './modal-toast.component.html',
  styleUrls: ['./modal-toast.component.css']
})
export class ModalToastComponent implements OnDestroy {
  modalOpen = false;
  toastOpen = false;
  private toastTimer?: ReturnType<typeof setTimeout>;

  ngOnDestroy(): void {
    clearTimeout(this.toastTimer);
  }

  @HostListener('window:keydown.escape')
  closeModal(): void {
    this.modalOpen = false;
  }

  showToast(): void {
    this.toastOpen = true;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastOpen = false, 3000);
  }
}
