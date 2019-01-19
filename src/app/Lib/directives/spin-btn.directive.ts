import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges,
    ViewContainerRef
} from '@angular/core';
import { MatIcon, MatSpinner } from '@angular/material';

@Directive({
    selector: '[libSpinBtn]'
})
export class SpinBtnDirective implements OnChanges {

    @Input('libSpinBtn') loading: boolean = false;

    private element: HTMLButtonElement;
    private spinnerRef: ComponentRef<MatSpinner>;
    private spinnerContainer: ComponentRef<MatIcon>;

    constructor(elRef: ElementRef,
                private resolver: ComponentFactoryResolver,
                public vcRef: ViewContainerRef,
                private renderer: Renderer2) {
        this.element = elRef.nativeElement;
    }

    startSpinner() {
        // Create components
        const spinnerFactory = this.resolver.resolveComponentFactory(MatSpinner);
        this.spinnerRef = this.vcRef.createComponent(spinnerFactory);
        const iconFactory = this.resolver.resolveComponentFactory(MatIcon);
        this.spinnerContainer = this.vcRef.createComponent(iconFactory);

        // Configure spinner
        this.spinnerRef.instance.diameter = 20;
        this.spinnerRef.instance.mode = 'indeterminate';
        this.spinnerRef.instance.color = 'accent';

        this.renderer.appendChild(
            this.spinnerContainer.location.nativeElement,
            this.spinnerRef.location.nativeElement
        );

        const btnWrapper = this.element.getElementsByClassName('mat-button-wrapper')[0];

        this.renderer.appendChild(
            btnWrapper,
            this.spinnerContainer.location.nativeElement
        );

        this.element.disabled = true;
    }

    stopSpinner() {

        if (!this.spinnerContainer) {
            return;
        }

        setTimeout(() => {

            const btnWrapper = this.element.getElementsByClassName('mat-button-wrapper')[0];
            this.renderer.removeChild(
                btnWrapper,
                this.spinnerContainer.location.nativeElement
            );
            this.element.disabled = false;
        }, 600);

    }

    ngOnChanges(changes: SimpleChanges): void {

        if (this.loading) {
            this.startSpinner();
        } else {
            this.stopSpinner();
        }
    }
}
