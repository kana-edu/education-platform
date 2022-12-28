import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/Popover";
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents/dist/SegmentedButton";
import "@ui5/webcomponents/dist/CardHeader.js";
import "@ui5/webcomponents-fiori/dist/Bar.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Link";
import "@ui5/webcomponents/dist/Switch";
import "@ui5/webcomponents-icons/dist/person-placeholder.js";
import "@ui5/webcomponents-icons/dist/learning-assistant.js";
import "@ui5/webcomponents-icons/dist/palette.js";
import "@ui5/webcomponents-icons/dist/group.js";
import "@ui5/webcomponents-icons/dist/badge.js";
import "@ui5/webcomponents-icons/dist/study-leave.js";
import "@ui5/webcomponents-icons/dist/reset.js";
import googleIcon from "/google-icon.svg";
import appleIcon from "/apple-icon.svg";
import facebookIcon from "/facebook-icon.svg";
import githubIcon from "/github-icon.svg";
import linkedInIcon from "/linkedin-icon.svg";
import twitterIcon from "/twitter-icon.svg";
import zoomIcon from "/zoom-icon.svg";
import './LoginScreen.css'
import { onMount, createSignal } from "solid-js";
import { createClient } from '@supabase/supabase-js'
// import * as dotenv from 'dotenv'

// dotenv.config()

const supabaseUrl = 'https://ibpacyzpfryhwpusqfek.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlicGFjeXpwZnJ5aHdwdXNxZmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA0NDUxOTksImV4cCI6MTk4NjAyMTE5OX0.Msxty8LsiyEweMDba4me5WBJXvMaMDq90vnqRzwjYoI'
const supabase = createClient(supabaseUrl, supabaseKey)

function LoginScreen() {

    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    onMount(() => {
        // console.log(process.env)
        var themeSelectorBtn = document.getElementById("themeSelector");
        var themeSelectorPopover = document.getElementById("themeSelectorPopover");
        // console.log(themeSelectorBtn);
        // console.log(themeSelectorPopover);
        themeSelectorBtn.addEventListener("click", function () {
            themeSelectorPopover.showAt(themeSelectorBtn);
        });
    })
    async function register() {
        alert("Email: " + email() + "\nPassword: " + password());
        await signup()
    }

    async function signup() {
        let { data, error } = await supabase.auth.signUp({
            email: 'prasanna.cm@live.com',
            password: 'WeFJRDmYPsslgeeiteUm'
        })
        console.log("data: " + data)
        console.log("error: " + error)
        return data;
    }

    return (



        <>
            {/* <ui5-shellbar
                primary-title="KANA EDU"
                secondary-title="" class="w-full ui5-content-density-compact">
                <ui5-icon slot="profile" name="person-placeholder" style="width:1rem;height:1rem;font-size:1.5rem;color:#2f6eea"></ui5-icon>
                <ui5-icon slot="logo" name="learning-assistant" style="width:2rem;height:1.5rem;font-size:1.5rem;color:#2f6eea" ></ui5-icon>
                <ui5-button id="themeSelector" icon="palette" style="width:3rem;height:3rem;font-size:1.5rem;color:#2f6eea"></ui5-button>
            </ui5-shellbar> */}
            {/* <ui5-bar design="Header">
                <ui5-title level="H4">Kana Edu</ui5-title>
            </ui5-bar> */}
            <div class="h-3rem w-screen bg-[var(--sapShellColor)] flex items-center justify-start">
                {/* <div class="w-1/4">
                    <ui5-icon slot="logo" name="learning-assistant" style="width:2rem;height:1.5rem;font-size:1.5rem;color:#2f6eea" ></ui5-icon>                    
                </div> */}
                <div class="flex pl-4 items-center justify-center">
                    <ui5-icon slot="logo" name="learning-assistant" style="width:2rem;height:1.5rem;font-size:1.5rem;color:var(--sapTitleColor)"></ui5-icon>
                    <ui5-title class="pl-4" level="H5">KANA Education Platform</ui5-title>
                </div>
                <div class="flex flex-1 justify-end pr-2">
                    <ui5-button id="themeSelector" design="Transparent" icon="palette" style="width:3rem;height:3rem;font-size:1.5rem;color:var(--sapTitleColor)"></ui5-button>
                    <ui5-button id="profile" design="Transparent" icon="person-placeholder" style="width:3rem;height:3rem;font-size:1.5rem;color:var(--sapTitleColor)"></ui5-button>
                </div>
            </div>
            <ui5-popover id="themeSelectorPopover" placement-type="Bottom" class="ui5-content-density-compact w-180px">
                <div class="popover-header ">
                    <ui5-title level="H6" style="padding-bottom:0.5rem">Theme:</ui5-title>
                    <ui5-segmented-button id="themeOptions">
                        <ui5-segmented-button-item id="themeOptionAuto" pressed>Auto</ui5-segmented-button-item>
                        <ui5-segmented-button-item id="themeOptionDark">Dark</ui5-segmented-button-item>
                        <ui5-segmented-button-item id="themeOptionLight">Light</ui5-segmented-button-item>
                    </ui5-segmented-button>
                </div>

                {/* <div class="popover-header pt-4">
                    <ui5-title level="H6" style="padding-bottom:0.5rem">Content density:</ui5-title>
                    <ui5-segmented-button>
                        <ui5-segmented-button-item id="densityOptions1" pressed>Cozy</ui5-segmented-button-item>
                        <ui5-segmented-button-item id="densityOptions2">Compact</ui5-segmented-button-item>
                    </ui5-segmented-button>
                </div> */}
            </ui5-popover>

            <div class="flex flex-col sapThemeHeight w-screen min-w-460px text-center items-center justify-center pb-90px">
                <ui5-card class="small w-460px h-380px min-w-460px">
                    <div class="flex flex-col w-full h-380px min-w-460px text-center items-center justify-center">
                        <fieldset class="w-4/5 m-2 mt-6">
                            <legend align="left" class="ml-4">Login with your email and password</legend>
                            <div class="px-6 pt-6 py-2 w-full">
                                <ui5-input show-clear-icon placeholder="Registered email address" class="w-full" onchange={(event) => setEmail(event.target.value)}></ui5-input>
                            </div>
                            <div class="px-6 py-2 w-full">
                                <ui5-input show-clear-icon placeholder="Password" type="Password" class="w-full" onchange={(event) => setPassword(event.target.value)}></ui5-input>
                            </div>
                            <div class="px-6 py-4 pt-3 w-full flex flex-row space-x-2">
                                <ui5-button icon="badge" design="Positive" class="w-full" onclick={() => register()}>Login</ui5-button>
                                {/* <ui5-button icon="reset" design="Default" class="w-full">Reset password</ui5-button> */}
                                {/* <div class="flex text-center items-center justify-center">
                                    <ui5-link>Forgot password</ui5-link>
                                </div> */}
                            </div>
                            <div class="pb-4 w-full flex flex-row text-center items-center justify-center">
                                <ui5-link>Forgot password</ui5-link>
                            </div>
                        </fieldset>

                        <div class="flex flex-row pt-4 pb-6 w-4/5">
                            <ui5-button icon="study-leave" design="Emphasized" class="w-full">Register for a new KANA account</ui5-button>
                        </div>
                        {/* <ui5-title level="H6">-- or --</ui5-title>
                        <fieldset class="w-4/5 m-8px">
                            <legend align="left" class="ml-2">Login with any of your existing account</legend>
                            <div class="w-full space-x-4 space-y-3">
                                <ui5-button design="Transparent" tooltip="Login in with your Apple account">
                                    <img src={appleIcon} alt="Login in with your Apple account" width="24px" height="24px"></img>
                                </ui5-button>
                                <ui5-button design="Transparent" tooltip="Login in with your Google account">
                                    <img src={googleIcon} alt="Login in with your Google account" width="24px" height="24px"></img>
                                </ui5-button>
                                <ui5-button design="Transparent" tooltip="Login in with your Facebook account">
                                    <img src={facebookIcon} alt="Login in with your Facebook account" width="24px" height="24px"></img>
                                </ui5-button>
                                <ui5-button design="Transparent" tooltip="Login in with your Github account">
                                    <img src={githubIcon} alt="Login in with your Github account" width="24px" height="24px"></img>
                                </ui5-button>
                                <ui5-button design="Transparent" tooltip="Login in with your LinkedIn account">
                                    <img src={linkedInIcon} alt="Login in with your LinkedIn account" width="24px" height="24px"></img>
                                </ui5-button>
                                <ui5-button design="Transparent" tooltip="Login in with your Twitter account">
                                    <img src={twitterIcon} alt="Login in with your Twitter account" width="24px" height="24px"></img>
                                </ui5-button>
                                <ui5-button design="Transparent" tooltip="Login in with your Zoom account">
                                    <img src={zoomIcon} alt="Login in with your Zoom account" width="24px" height="24px"></img>
                                </ui5-button>
                            </div>
                        </fieldset> */}
                    </div>
                </ui5-card>
            </div>
        </>
    )
}

export default LoginScreen;