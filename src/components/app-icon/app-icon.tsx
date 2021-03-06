import { Component, Prop} from '@stencil/core';

@Component({
  tag: 'app-icon',
  styleUrl: 'app-icon.css'
})
export class AppIcon {

  @Prop() name?: string;

  render() {
    return (
      <svg class={`icon icon-${this.name}`}>
        <use xlinkHref={`#icon-${this.name}`}/>
      </svg>
    );
  }
}
