import { expect, Locator, Page } from "@playwright/test";


export class HeaderComponents{
private readonly logoLink: Locator;
private readonly logoImage:Locator;
private readonly menuIcon:Locator;
private readonly contactQuickLink:Locator;

constructor(page: Page){
this.logoLink= page.locator('a.header__heading-link')
this.logoImage= page.locator('.header__heading-logo')
}

async checkLogoLink (){
    await expect(this.logoLink).toHaveAttribute('href','/')
}
async checkLogoIcon (){
    await expect(this.logoImage).toBeVisible()
}

}




/* const logoLink= page.locator('a.header__heading-link')
        await expect(logoLink).toBeVisible();
        await expect(logoLink).toHaveAttribute('href','/')*/
