import Head from "next/head";


export default function Home() {
    const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
    //   xhttp.open("Post", 'https://admin.caretab.ai/wp-json/contact-form-7/v1/contact-forms/6/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Your submission has been received and we will contact you soon";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                   window.location.href = "/thankyou"
               }, 10);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
      };
      xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&lastname=" + event.target.lname.value +
            "&your-message=" + event.target.message.value)

   }


	return (
		<>
			<Head>
				<title>Contact Us - ANVKA</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/page-title.jpg" alt="page-title"/>
                    </div>
                    <div class="content">
                        <div class="tf-container">
                            {/* <ul class="tf-breadcrumb style-2 mb_16">
                                <li class="text-label text_white lh-16"><a href="/index.html"
                                        class="link text_white">HOME</a>
                                </li>
                                <li class="text_white text-label lh-16">Contact Us</li>
                            </ul> */}
                            <h2 class="text_white newcolorx">Contact Us</h2>
                        </div>
                    </div>
                </div>


                <div class="main-content">                    
                    <div class="section-contact tf-spacing-1">
                        <div class="tf-container">
                            <div class="heading-title mb_48">
                                <div class="row align-items-end">
                                    <div class="col-lg-6">
                                        <h2 class="title text_primary ajfont30">Have Questions? We’d Be <br></br>Happy to Assist You!</h2>
                                    </div>
                                    <div class="col-lg-6">
                                        <p class="text-body-2 text_secondary">We are deeply committed to providing
                                            patient-centered care that prioritizes your
                                            well-being, delivered with empathy, clinical excellence, and unwavering
                                            integrity at
                                            every step of your healthcare journey.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="box-contact">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="box-info rounded-16">
                                            <div class="heading mb_24">
                                                <h4 class="mb_6 text_primary">Reach Out To Us</h4>
                                                <p class="text_secondary text-body-default">We’re here to assist with
                                                    any
                                                    questions, concerns, or inquiries—contact us today!</p>
                                            </div>
                                            <ul class="info-list d-grid gap_20">
                                                <li>
                                                    <div class="icon">
                                                        <i class="icon-MapPin"></i>
                                                    </div>                                                    
                                                    <div class="content">
                                                        <div class="text-caption-1 text_secondary mb_4">Registered Office:</div>
                                                        <p class="h6">M-14, Khasra No 99/24, M Block Raja Puri, Uttam Nagar, New Delhi – 110059</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="icon">
                                                        <i class="icon-MapPin"></i>
                                                    </div>
                                                    <div class="content">
                                                        <div class="text-caption-1 text_secondary mb_4">Corporate Office:</div>
                                                        <p class="h6">Plot No. 231, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122001</p>
                                                    </div>                                                   
                                                </li>
                                                <li>
                                                    <div class="icon">
                                                        <i class="icon-PhoneCall"></i>
                                                    </div>
                                                    <div class="content">
                                                        <div class="text-caption-1 text_secondary mb_4">Phone:</div>                                                       
                                                        <a href="tel:+91-92055 59801" class="h6 link">+91-92055 59801</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="icon">
                                                        <i class="icon-Alarm"></i>
                                                    </div>
                                                    <div class="content">
                                                        <div class="text-caption-1 text_secondary mb_4">Email:</div>
                                                          <a href="mailto:reachus@anvka.com" class="h6 link">reachus@anvka.com</a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <form class="form-contact" id="contactForm" onSubmit={registerUser}>
                                            <div class="heading mb_24">
                                                <h4 class="mb_5">Get In Touch</h4>
                                                <p class="text-body-default text_secondary">We'd love to hear from you!
                                                    If you
                                                    have any questions</p>
                                            </div>
                                            <div class="wrap mb_39">
                                                <div class="tf-grid-layout md-col-2 gap_20  mb_20">
                                                    <fieldset class="">
                                                        <input class="style-line-bottom" type="text"
                                                            placeholder="First Name" name="name" id="name" tabindex="2"
                                                            aria-required="true" required=""/>
                                                    </fieldset>
                                                    <fieldset class="">
                                                        <input class="style-line-bottom" id="lname" name="lname" type="text"
                                                            placeholder="Last Name"  tabindex="2"
                                                            aria-required="true" required=""/>
                                                    </fieldset>
                                                </div>
                                                <div class="tf-grid-layout md-col-2 gap_20 mb_20">
                                                    <fieldset class="">
                                                        <input class="style-line-bottom" id="email" type="email"
                                                            placeholder="Email" name="email" tabindex="2"
                                                            aria-required="true" required=""/>
                                                    </fieldset>
                                                    <fieldset class="">
                                                        <input class="style-line-bottom" id="phone" type="number"
                                                            placeholder="Phone Number" name="phone" tabindex="2"
                                                            aria-required="true" required=""/>
                                                    </fieldset>
                                                </div>
                                                <fieldset>
                                                    <textarea id="message" name="message" class="style-line-bottom" rows="4"
                                                        placeholder="Your Message" tabindex="2" aria-required="true"
                                                        required=""></textarea>
                                                </fieldset>
                                            </div>
                                            <button id="submitbuttonform" class="tf-btn btn-hover-animate-2 btn-bg-1 btn-px-28 w-full"
                                                type="submit">
                                                <span>Send Message</span>
                                                <span id="showlabel" style={{ display: "none" }} class="bg-effect"></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="position-relative ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4516626364566!2d77.0806973!3d28.496055799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0297de4cf675%3A0x23cd817144a2548f!2sANVKA%20Healthcare%20Private%20Limited!5e0!3m2!1sen!2sin!4v1778839774956!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

		</>
	);
}
