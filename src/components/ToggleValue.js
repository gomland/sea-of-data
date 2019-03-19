export default class ToggleValue {
    constructor(value, direction) {
        this.toggleState = direction;
        this.value = direction ? -value : Math.abs(value);
        this.max = value;
    }

    getNext() {
        if (this.toggleState) {
            this.value -= 0.5;
            if (this.value < -this.max) {
                this.toggleState = false;
            }
        } else {
            this.value += 0.5;
            if (this.value > this.max) {
                this.toggleState = true;
            }
        }

        return this.value;
    }

    getState() {
        return this.toggleState;
    }
}