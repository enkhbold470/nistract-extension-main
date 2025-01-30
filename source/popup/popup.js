import { labelsArray, defaultOptions } from "../modules/lib.js";

// Save options to storage with proper error handling
const saveOptions = async () => {
    try {
        const options = {};
        for (const label of labelsArray) {
            const element = document.getElementById(label);
            if (element !== null) {
                options[label] = element.checked;
            }
        }

        await chrome.storage.sync.set(options);
        
        // Show success message
        const status = document.getElementById("status");
        status.textContent = "Saved! ✌️ Refresh now!";
        
        // Clear message after delay
        setTimeout(() => {
            status.textContent = "";
        }, 2000);

    } catch (error) {
        console.error('Error saving options:', error);
        const status = document.getElementById("status");
        status.textContent = "Error saving settings";
        status.style.color = "#ef4444"; // Red color for error
        
        setTimeout(() => {
            status.textContent = "";
            status.style.color = "var(--success)"; // Reset color
        }, 2000);
    }
};

// Restore options from storage with proper error handling
const restoreOptions = async () => {
    try {
        // Get stored options, falling back to defaults
        const items = await chrome.storage.sync.get(defaultOptions);
        
        // Update checkboxes
        for (const [key, value] of Object.entries(items)) {
            const element = document.getElementById(key);
            if (element) {
                element.checked = value;
            }
        }
    } catch (error) {
        console.error('Error restoring options:', error);
    }
};

// Initialize options when DOM is loaded
document.addEventListener("DOMContentLoaded", restoreOptions);

// Save options when save button is clicked
document.getElementById("save").addEventListener("click", saveOptions);