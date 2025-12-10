import { Locator,Page,expect } from "@playwright/test";

export class SearchComponents {
private readonly searchBarOnHeader: Locator;
private readonly searchFor: Locator;
private readonly searchResutHeader: Locator;
private readonly nonExistResultMessage: Locator


constructor (page: Page){
this.searchBarOnHeader= page.locator('#Search-In-Inline')
this.searchFor= page.getByRole('option', { name: 'Search for “Smart Door Lock Slim”' })
this.searchResutHeader= page.locator('h1:has-text("Search results")')
this.nonExistResultMessage= page.getByText('No results found for')

}
 async assertHeaderSearchBarIsVisible(){
    await expect(this.searchBarOnHeader).toBeVisible()
 }
 async fillSearchbarOnHeader (text: string){
    await this.searchBarOnHeader.fill(text)
 }
 async assertSearchForIsVisible(){
 await expect (this.searchFor).toBeVisible();
 }
 async clickOnSearchFor(){
await this.searchFor.click() 
 }
 async assertSearchResultHeaderIsVisible(){
 await expect(this.searchResutHeader).toBeVisible()
 }
 async assertNoResultMessageIsShown(){
    await expect(this.nonExistResultMessage).toBeVisible()

 }
}


    
        
                 
         