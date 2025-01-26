import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

import { handleSubmit } from "./js/formHandler";
import { checkForName } from "./js/nameChecker";

alert('I am here!');

export {
    checkForName,
    handleSubmit
}
