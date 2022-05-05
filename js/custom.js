$(document).ready(function () {

    $("#w-node-_0941d12c-eae9-33b6-8979-5d22a2baec9c-25be96d7").on('click', function () {
        Add_Skills_Section();
    });
    $("#w-node-fd5f3992-2c7f-76a2-4117-70a223359dc0-25be96d7").on('click', function () {
        Add_Credential();
    });


    $(".delete").click(function () {
        Remove_Skills_Section();

    });
});
function Add_Skills_Section() {
    var skills = $("#webflow_skills >  .quiz-buiilder-question");
    var SkillsCount = skills.length;
    var i = parseInt(SkillsCount);
    console.log("SkillsCount", i)
    var addSkillSection =
        '<div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93d-25be96d7" class="w-layout-grid quiz-buiilder-question">' +
            '<div id = "w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93e-25be96d7" class="quiz-builder-question-number" >' +
                '<div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93f-25be96d7">' + (i + 2) + '</div>' +
            '</div>' +
            '<div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb941-25be96d7" class="quiz-builder-question"><input type="text" class="modal-input w-input" maxlength="256" name="Skill" data-name="Skill" placeholder="" id="Skill">' +
                '<a href="#" class="button dashboard-body modal-button delete quiz w-button"><span class="inline-leading-icon"><strong></strong></span>Remove Skill</a>' +
            '</div>' +
        '</div >';
    $("#webflow_skills").append(addSkillSection);

}
function Add_Credential() {
    var Credentials = $("#webflow_credentials >  .quiz-buiilder-question");
    var CredentialsCount = Credentials.length;
    var i = parseInt(CredentialsCount);
    // console.log("CredentialsCount", i)
    var addCredentialSection =`
        <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db5-25be96d7" class="w-layout-grid profile-add-row"> 
            <div id = "w-node-fd5f3992-2c7f-76a2-4117-70a223359db6-25be96d7" class="profile-add-row-column" > 
                <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db7-25be96d7">1</div>
            </div > 
            <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db9-25be96d7" class="quiz-builder-question"> 
                <label for="Education-Credential" class="modal-input-label-copy">Credential</label> 
                <input type="text" class="modal-input w-input" maxlength="256" name="Education-Credential" data-name="Education Credential" placeholder="" id="Education-Credential"> 
                    <label for="Education-Issuer" class="modal-input-label">Issuer</label> 
                    <input type="text" class="modal-input w-input" maxlength="256" name="Education-Issuer" data-name="Education Issuer" placeholder="" id="Education-Issuer"> 
                    <a href="#" class="button dashboard-body modal-button delete quiz w-button"> 
                        <span class="inline-leading-icon"> 
                        <strong></strong> 
                    </span>+Remove Credential</a> 
            </div> 
        </div>`;
    $("#webflow_credentials").append(addCredentialSection);

}

function Remove_Skills_Section() {
    alert('REMOVEACTION');
    $("#w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93d-25be96d7").remove();  //remove Div element
    Add_Skills_Section();
}