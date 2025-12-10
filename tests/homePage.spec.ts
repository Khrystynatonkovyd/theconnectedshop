  import {test, Page, expect} from "@playwright/test"
import { HeaderComponents } from "./component/headerComponents"
import { HomePage } from "./pages/homePage";
import { SearchComponents } from "./component/searchComponents";

test.describe('check home page elements', () => {
    let headerComponents: HeaderComponents;
    let homePage: HomePage;
    let searchComponents: SearchComponents

    test.beforeEach(async({page})=>{
        headerComponents=new HeaderComponents(page)
        homePage= new HomePage (page)
        searchComponents= new SearchComponents(page)
        await homePage.goto()
    })


    test ('Check url and title', async ({page}) => {
       
        await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office') })

    test ('Check logo', async ({page}) => {
        await headerComponents.checkLogoLink()
        await headerComponents.checkLogoIcon()
        })
     test ('Serching the existing item', async({page}) => {
         await searchComponents.assertHeaderSearchBarIsVisible()
         await searchComponents.fillSearchbarOnHeader('Smart Door Lock Slim')
         await searchComponents.assertSearchForIsVisible()
         await searchComponents.clickOnSearchFor
         await searchComponents.assertSearchResultHeaderIsVisible()

        })
       
        test('Searching the non-existent item', async ({ page }) => {
         await searchComponents.assertHeaderSearchBarIsVisible()
         await searchComponents.fillSearchbarOnHeader('якась не існуюча дичина')
         await searchComponents.assertSearchForIsVisible()
         await searchComponents.clickOnSearchFor()
        await searchComponents.assertNoResultMessageIsShown()
        })
            

}) 