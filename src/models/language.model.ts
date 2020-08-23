export class languageModel {
    languages: any[];
    
    constructor() {
        let data = [
            { code: 'en-US', label: 'English' },
            { code: 'am', label: 'Amharic' },
            { code: 'fr', label: 'French' }
        ];
        this.languages = data;
    }
}
