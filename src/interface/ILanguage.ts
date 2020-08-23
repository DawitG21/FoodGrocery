import { Observable } from 'rxjs/internal/Observable';
import { languageModel } from 'src/models/language.model';

export interface ILanguage {
    get(): Observable<languageModel>;
}
