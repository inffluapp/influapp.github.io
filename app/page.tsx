'use client';

import React from "react";
import Link from "next/link";
import HomeContent from "./terms/components/HomeContent";

export default function Home() {
  return (
    <div id="body-wrap">
      <div className="row">
        <div className="col-8">
          <div className="container">

            <header id="header">
              <h1>Influapp</h1>
            </header>

            <div className="main-content">

              {/* new content */}
              <HomeContent />
              {/* end new content */}
              <div className="social-links">
                <ul>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/inffluapp">
                      <img height="30px" src="/images/instagram.png" />
                    </a>
                  </li>
                  <li>
                    <img height="30px" src="/images/apple-store.png" />
                  </li>
                  <li>
                    <img height="30px" src="/images/google-playstore.png" />
                  </li>
                </ul>
              </div>

              <ul style={{padding: 0}}>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms" style={{color: '#0043ee'}}>
                    Términos y condiciones
                  </Link>
                </li>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms/privacy" style={{color: '#0043ee'}}>
                    Politicas de privacidad
                  </Link>
                </li>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms/support" style={{color: '#0043ee'}}>
                    Soporte
                  </Link>
                </li>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms/delete-account" style={{color: '#0043ee'}}>
                    Eliminar cuenta
                  </Link>
                </li>
              </ul>

            </div>

            <footer id="footer">

              <div className="copyright">
                <p>Copyright &copy; <a href="#" target="_blank">Influapp</a> 2024. <a
                    href="https://www.instagram.com/inffluapp" target="_blank" style={{color: '#0043ee'}}> <b> <br /> <u>
                        Visita instagram.com/inffluapp
                      </u></b> </a></p>

              </div>

            </footer>

          </div>
        </div>

        <div className="col-4">
          <img src="/images/sideimg.png" alt="wallpaper" className="sideimg" />
        </div>
      </div>

    </div>
  );
}
