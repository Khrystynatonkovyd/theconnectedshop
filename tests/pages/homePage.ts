import { Page,expect} from "@playwright/test";

export class HomePage {readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('/');
        await expect(this.page).toHaveURL('/');
    }
 
    async checkTitle() {
               await expect(this.page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    }
    async searchExistingItem () {
        await this.page
}
}

