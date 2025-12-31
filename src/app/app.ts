import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecundaryButton } from './_components/secundary-button/secundary-button';
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoForm } from './pages/certificado-form/certificado-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, PrimaryButton, SecundaryButton, ItemCertificado, BaseUi, Certificados, CertificadoForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  title = 'gerador-certificado';
  exibirNavBar: boolean = false;
}
