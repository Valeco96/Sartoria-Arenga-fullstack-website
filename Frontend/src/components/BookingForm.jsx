import { useState } from "react";
import { createBooking } from "../data/bookings";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    appointmentDate: null,
    service: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, appointmentDate: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      if (!formData.appointmentDate) {
        throw new Error("Per favore seleziona una data e un orario");
      }

      const appointment = new Date(formData.appointmentDate);
      const hour = appointment.getHours();

      //Validazione lato client: orario compreso tra le 09:00 e le 18:00
      if (hour < 9 || hour >= 18) {
        throw new Error(
          "L'orario scelto non è valido. Gli appuntamenti sono disponibili tra le 09:00 e le 18:00"
        );
      }
      if (appointment < new Date()) {
        throw new Error("Impossibile scegliere una data passata.");
      }

      //Invia la prenotazione solo se l'orario è valido
      const data = await createBooking(formData);

      if (!data) throw new Error("Errore nella creazione della prenotazione.");

      alert(
        "La tua richiesta di prenotazione è stata inviata. Ti manderemo un'email di conferma della ricevuta del tuo appuntamento."
      );

      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        appointmentDate: null,
        service: "",
        notes: "",
      });
    } catch (error) {
      alert(
        "La richiesta di prenotazione non è andata a buon fine. Vi chiediamo di ricontrollare che tutti i campi siano stati compilati, e che l'orario di prenotazione sia corretto."
      );
      setError(error.message || "Errore del server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          {/* <Form.Label className="fw-bold">Nome:</Form.Label> */}
          <Form.Floating className="mb-3">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Nome:</label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label className="fw-bold">Cognome:</Form.Label> */}
          <Form.Floating className="mb-3">
            <Form.Control
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Cognome:</label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label className="fw-bold">Email:</Form.Label> */}
          <Form.Floating className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Email:</label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label className="fw-bold">Telefono:</Form.Label> */}
          <Form.Floating className="mb-3">
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Telefono:</label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold me-3">
            Data e Ora Appuntamento:
          </Form.Label>
          <DatePicker
            selected={formData.appointmentDate}
            onChange={handleDateChange}
            showTimeSelect
            timeIntervals={30}
            dateFormat="dd/MM/yyyy HH:hh"
            minDate={new Date()}
            placeholderText="Seleziona data e ora"
            className="form-control"
            required
          />
          {/* <Form.Control
            type="datetime-local"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          /> */}
          <Form.Text className="text-muted d-block">
            Orario disponibile (Lun-Ven: 09:00-18:00 / Sab: 10:00-13:00)
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Servizio Richiesto:</Form.Label>
          <Form.Select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">- Seleziona un servizio -</option>
            <option value="riparazione">Riparazione</option>
            <option value="su-misura">Abito su misura</option>
            <option value="modifica">Modifica capo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Messaggio:</Form.Label>
          <Form.Control
            as="textarea"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="mt-5">
          <Button className="btn-custom-salva" type="submit" disabled={loading}>
            {loading ? (
              <Spinner size="sm" animation="border" />
            ) : (
              "Invia Prenotazione"
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default BookingForm;
