// undo_redo.js

class UndoRedoManager {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }

    saveState(state) {
        this.undoStack.push(state);
        this.redoStack = [];
    }

    getCurrentState() {
        return this.undoStack.length > 0 ? this.undoStack[this.undoStack.length - 1] : null;
    }

    undo() {
        if (this.undoStack.length > 1) {
            const currentState = this.undoStack.pop();
            this.redoStack.push(currentState);
            return this.undoStack[this.undoStack.length - 1];
        }
        return null;
    }

    redo() {
        if (this.redoStack.length > 0) {
            const state = this.redoStack.pop();
            this.undoStack.push(state);
            return state;
        }
        return null;
    }
}

const undoRedoManager = new UndoRedoManager();

function getCurrentSliderValues() {
    const sliderValues = {};
    document.querySelectorAll('.rs-range').forEach(slider => {
        sliderValues[slider.id] = slider.value;
    });
    return sliderValues;
}

function saveCurrentState() {
    const sliderValues = getCurrentSliderValues();
    undoRedoManager.saveState(sliderValues);
}

function applyState(state) {
    if (state) {
        for (const id in state) {
            const slider = document.getElementById(id);
            if (slider) {
                slider.value = state[id];
                slider.dispatchEvent(new Event('input'));
            }
        }
    }
}

// 初期状態の保存
document.addEventListener('DOMContentLoaded', () => {
    saveCurrentState();
});

// Undo/Redo ボタンのイベントリスナー
document.getElementById('undo-button').addEventListener('click', () => {
    const state = undoRedoManager.undo();
    applyState(state);
});

document.getElementById('redo-button').addEventListener('click', () => {
    const state = undoRedoManager.redo();
    applyState(state);
});

// スライダーのイベントリスナー
document.querySelectorAll('.rs-range').forEach(slider => {
    slider.addEventListener('change', () => {
        const currentState = undoRedoManager.getCurrentState();
        const newSliderValues = getCurrentSliderValues();

        // 現在の状態と異なる場合のみ保存
        if (JSON.stringify(currentState) !== JSON.stringify(newSliderValues)) {
            saveCurrentState();
        }
    });
});
