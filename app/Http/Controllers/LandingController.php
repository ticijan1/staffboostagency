<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Requests\EmploymentRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Contact;
use App\Models\EmploymentApplication;
use App\Models\Subscription;

class LandingController extends Controller
{
    public function index()
    {
        return view('landing.index');
    }

    public function sendContact(ContactRequest $request)
    {
        $data = $request->validated();
        $lang = in_array($request->input('lang'), ['en','sr']) ? $request->input('lang') : 'en';

        $firstName = strip_tags($data['first_name']);
        $lastName = strip_tags($data['last_name']);
        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        $phone = strip_tags($data['phone']);
        $subject = preg_replace('/[\r\n]+/', ' ', strip_tags($data['subject']));
        $messageText = nl2br(e($data['message']));

        if (preg_match('/[\r\n]/', $email)) {
            abort(400, 'Invalid email address.');
        }

        if (session()->has('last_contact_time') && time() - session('last_contact_time') < 30) {
            return response()->json(['error' => 'Please wait before sending another message.'], 429);
        }
        session(['last_contact_time' => time()]);

        Contact::create([
            'first_name' => $firstName,
            'last_name'  => $lastName,
            'email'      => $email,
            'phone'      => $phone,
            'subject'    => $subject,
            'message'    => strip_tags($data['message']),
        ]);

        Mail::send([], [], function ($message) use ($firstName, $lastName, $email, $phone, $subject, $messageText) {
            $message->to('staffboostagency@gmail.com')
                ->from('info@staffboostagency.com', 'Staff Boost Agency')
                ->subject($subject)
                ->html(
                    "<strong>Source:</strong> Contact Form<br><br>" .
                    "First Name: {$firstName}<br>" .
                    "Last Name: {$lastName}<br>" .
                    "Email: {$email}<br>" .
                    "Phone: {$phone}<br>" .
                    "Message: <br>" . $messageText
                )
                ->replyTo($email);
        });

        $successMessage = $lang === 'sr' ? 'Vaša poruka je uspešno poslata.' : 'Your message has been sent successfully.';
        return response()->json(['success' => true, 'message' => $successMessage]);
    }

    public function sendEmployment(EmploymentRequest $request)
    {
        $data = $request->validated();
        $lang = in_array($request->input('lang'), ['en','sr']) ? $request->input('lang') : 'en';

        $firstName = strip_tags($data['first_name']);
        $lastName = strip_tags($data['last_name']);
        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        $phone = strip_tags($data['phone']);
        $country = strip_tags($data['country_of_residence']);
        $position = strip_tags($data['desired_position_or_field']);
        $messageText = nl2br(e($data['message']));

        if (preg_match('/[\r\n]/', $email)) {
            abort(400, 'Invalid email address.');
        }

        if (session()->has('last_employment_time') && time() - session('last_employment_time') < 30) {
            return response()->json(['error' => 'Please wait before sending another application.'], 429);
        }
        session(['last_employment_time' => time()]);

        EmploymentApplication::create([
            'first_name' => $firstName,
            'last_name'  => $lastName,
            'email'      => $email,
            'phone'      => $phone,
            'country_of_residence' => $country,
            'desired_position_or_field' => $position,
            'message'    => strip_tags($data['message']),
        ]);

        Mail::send([], [], function ($message) use ($firstName, $lastName, $email, $phone, $country, $position, $messageText) {
            $message->to('staffboostagency@gmail.com')
                ->from('info@staffboostagency.com', 'Staff Boost Agency')
                ->subject('New Employment Application')
                ->html(
                    "<strong>Source:</strong> Employment Form<br><br>" .
                    "First Name: {$firstName}<br>" .
                    "Last Name: {$lastName}<br>" .
                    "Email: {$email}<br>" .
                    "Phone: {$phone}<br>" .
                    "Country of Residence: {$country}<br>" .
                    "Desired Position/Field: {$position}<br>" .
                    "Message: <br>" . $messageText
                )
                ->replyTo($email);
        });

        $successMessage = $lang === 'sr' ? 'Vaša prijava je uspešno poslata.' : 'Your application has been sent successfully.';
        return response()->json(['success' => true, 'message' => $successMessage]);
    }

    public function subscribe(Request $request)
    {
        $lang = in_array($request->input('lang'), ['en','sr']) ? $request->input('lang') : 'en';
        $validated = $request->validate([
            'email' => 'required|email:rfc,dns|max:255',
        ]);

        $email = filter_var($validated['email'], FILTER_SANITIZE_EMAIL);
        if (preg_match('/[\r\n]/', $email)) {
            abort(400, 'Invalid email address.');
        }

        Subscription::firstOrCreate(['email' => $email]);

        $successMessage = $lang === 'sr' ? 'Uspešno ste se prijavili.' : 'Subscribed successfully.';
        return response()->json(['success' => true, 'message' => $successMessage]);
    }
}
